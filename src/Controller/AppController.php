<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/')]
class AppController extends AbstractController
{
    #[Route('/', name: 'accueil')]
    public function index(): Response
    {
        return $this->render('app/index.html.twig', [
            "selected" => 'accueil'
        ]);
    }

    #[Route('/infos', name: 'infos')]
    public function infos(): Response
    {
        return $this->render('app/infos.html.twig', [
            "selected" => 'infos'
        ]);
    }

    #[Route('/tarifs', name: 'tarifs')]
    public function tarifs(): Response
    {
        return $this->render('app/tarifs.html.twig', [
            "selected" => 'tarifs'
        ]);
    }

    #[Route('/blog', name: 'blog')]
    public function blog(): Response
    {
        return $this->render('app/tarifs.html.twig', [
            "selected" => 'blog'
        ]);
    }

    #[Route('/contact', name: 'contact')]
    public function contact(): Response
    {
        return $this->render('app/tarifs.html.twig', [
            "selected" => 'contact'
        ]);
    }

    #[Route('/rendez-vous', name: 'rdv')]
    public function rdv(): Response
    {
        return $this->render('app/tarifs.html.twig', [
            "selected" => 'rdv'
        ]);
    }


}
