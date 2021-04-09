<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
#[Route('/admin')]
class AdminController extends AbstractController
{
    #[Route('/', name: 'accueil_admin')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'selected' => 'accueil',
            
        ]);
    }

    //GESTION HORAIRES

    


}
