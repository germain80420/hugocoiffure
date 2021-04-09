<?php

namespace App\Controller;

use App\Entity\ImageDiaporama;
use App\Form\ImageDiaporamaType;
use App\Repository\ImageDiaporamaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
#[Route('admin/image')]
class ImageDiaporamaController extends AbstractController
{
    #[Route('/', name: 'image_diaporama_index', methods: ['GET'])]
    public function index(ImageDiaporamaRepository $imageDiaporamaRepository): Response
    {
        return $this->render('admin/image_diaporama/index.html.twig', [
            'selected'=>"",
            'image_diaporamas' => $imageDiaporamaRepository->findAll(),
        ]);
       
    }

    #[Route('/new', name: 'image_diaporama_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $imageDiaporama = new ImageDiaporama();
        $form = $this->createForm(ImageDiaporamaType::class, $imageDiaporama);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $image = $form->get('image')->getData();
            $fichier = md5(uniqid()).'.'.$image->guessExtension();
            $image->move(
                $this->getParameter('images_directory'),
                $fichier
            );
            $imageDiaporama->setSrc($fichier);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($imageDiaporama);
            $entityManager->flush();

            return $this->redirectToRoute('image_diaporama_index');
        }

        return $this->render('admin/image_diaporama/new.html.twig', [
            'selected'=>"",
            'image_diaporama' => $imageDiaporama,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'image_diaporama_show', methods: ['GET'])]
    public function show(ImageDiaporama $imageDiaporama): Response
    {
        return $this->render('admin/image_diaporama/show.html.twig', [
            'selected'=>"",
            'image_diaporama' => $imageDiaporama,
        ]);
    }

    #[Route('/{id}/edit', name: 'image_diaporama_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ImageDiaporama $imageDiaporama): Response
    {
        $form = $this->createForm(ImageDiaporamaType::class, $imageDiaporama);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('image_diaporama_index');
        }

        return $this->render('admin/image_diaporama/edit.html.twig', [
            'selected' => "",
            'image_diaporama' => $imageDiaporama,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'image_diaporama_delete', methods: ['POST'])]
    public function delete(Request $request, ImageDiaporama $imageDiaporama): Response
    {
        if ($this->isCsrfTokenValid('delete'.$imageDiaporama->getId(), $request->request->get('_token'))) {
            $nom = $imageDiaporama->getSrc();
        // On supprime le fichier
        unlink($this->getParameter('images_directory').'/'.$nom);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($imageDiaporama);
            $entityManager->flush();
        }

        return $this->redirectToRoute('image_diaporama_index');
    }

    

}
