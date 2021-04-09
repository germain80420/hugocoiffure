<?php

namespace App\Controller;

use App\Entity\CategorieImage;
use App\Form\CategorieImageType;
use App\Repository\CategorieImageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('admin/categorieImage')]
class CategorieImageController extends AbstractController
{
    #[Route('/', name: 'categorie_image_index', methods: ['GET'])]
    public function index(CategorieImageRepository $categorieImageRepository): Response
    {
        return $this->render('admin/categorie_image/index.html.twig', [
            "selected" => '',
            'categorie_images' => $categorieImageRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'categorie_image_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $categorieImage = new CategorieImage();
        $form = $this->createForm(CategorieImageType::class, $categorieImage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($categorieImage);
            $entityManager->flush();

            return $this->redirectToRoute('categorie_image_index');
        }

        return $this->render('admin/categorie_image/new.html.twig', [
            "selected" => '',
            'categorie_image' => $categorieImage,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'categorie_image_show', methods: ['GET'])]
    public function show(CategorieImage $categorieImage): Response
    {
        return $this->render('admin/categorie_image/show.html.twig', [
            "selected" => '',
            'categorie_image' => $categorieImage,
        ]);
    }

    #[Route('/{id}/edit', name: 'categorie_image_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CategorieImage $categorieImage): Response
    {
        $form = $this->createForm(CategorieImageType::class, $categorieImage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('categorie_image_index');
        }

        return $this->render('admin/categorie_image/edit.html.twig', [
            "selected" => '',
            'categorie_image' => $categorieImage,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'categorie_image_delete', methods: ['POST'])]
    public function delete(Request $request, CategorieImage $categorieImage): Response
    {
        if ($this->isCsrfTokenValid('delete'.$categorieImage->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($categorieImage);
            $entityManager->flush();
        }

        return $this->redirectToRoute('categorie_image_index');
    }
}
