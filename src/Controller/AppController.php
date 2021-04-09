<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\HorairesRepository;
use App\Entity\ImageDiaporama;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ImageDiaporamaRepository;
use App\Repository\CategorieImageRepository;


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
    public function infos(HorairesRepository $horairesRepository): Response
    {
        return $this->render('app/infos.html.twig', [
            "selected" => 'infos',
            'horaires' => $horairesRepository->findAll(),
        ]);
    }

    #[Route('/prestations', name: 'prestations')]
    public function prestations(): Response
    {
        return $this->render('app/prestations.html.twig', [
            "selected" => 'prestations'
        ]);
    }

    #[Route('/blog', name: 'blog')]
    public function blog(): Response
    {
        return $this->render('app/blog.html.twig', [
            "selected" => 'blog'
        ]);
    }

    #[Route('/contact', name: 'contact')]
    public function contact(): Response
    {
        return $this->render('app/contact.html.twig', [
            "selected" => 'contact'
        ]);
    }

    #[Route('/photos', name: 'photos')]
    public function photo(CategorieImageRepository $categorieImageRepository): Response
    {

        return $this->render('app/photos.html.twig', [
            "selected" => 'photos',
            "categories" =>$categorieImageRepository->findAll()
        ]);
    }

    #[Route('/all/json', name: 'image_diaporama_json',methods: ['GET'])]
    public function getAllImages(ImageDiaporamaRepository $imageDiaporamaRepository, SerializerInterface $serializer)
    {
                
       return $this->json($imageDiaporamaRepository->findAll(),200,[],['groups' => ['image']]);
       
        
    }


}
