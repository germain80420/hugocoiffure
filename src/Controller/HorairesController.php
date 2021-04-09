<?php

namespace App\Controller;

use App\Entity\Horaires;
use App\Form\HorairesType;
use App\Repository\HorairesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('admin/horaires')]
class HorairesController extends AbstractController
{
    #[Route('/', name: 'horaires_index', methods: ['GET'])]
    public function index(HorairesRepository $horairesRepository): Response
    {
        return $this->render('horaires/index.html.twig', [
            'selected' =>"",
            'horaires' => $horairesRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'horaires_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $horaire = new Horaires();
        $form = $this->createForm(HorairesType::class, $horaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($horaire);
            $entityManager->flush();

            return $this->redirectToRoute('horaires_index');
        }

        return $this->render('horaires/new.html.twig', [
            'selected' =>"",
            'horaire' => $horaire,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'horaires_show', methods: ['GET'])]
    public function show(Horaires $horaire): Response
    {
        return $this->render('horaires/show.html.twig', [
            'selected' =>"",
            'horaire' => $horaire,
        ]);
    }

    #[Route('/{id}/edit', name: 'horaires_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Horaires $horaire): Response
    {
        $form = $this->createForm(HorairesType::class, $horaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('horaires_index');
        }

        return $this->render('horaires/edit.html.twig', [
            'selected' =>"",
            'horaire' => $horaire,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'horaires_delete', methods: ['POST'])]
    public function delete(Request $request, Horaires $horaire): Response
    {
        if ($this->isCsrfTokenValid('delete'.$horaire->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($horaire);
            $entityManager->flush();
        }

        return $this->redirectToRoute('horaires_index');
    }
}
