<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class MainController extends AbstractController
{

    /**
     * @Route("/", name="main")
     */
    public function index()
    {
        return $this->render('base.html.twig');
    }


    /**
     * @Route("/api/products", name="products")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getProducts()
    {
        $product = [
            [
                'id' => 1,
                'picture' => "https://i.picsum.photos/id/10/900/400.jpg",
                'title' => "My first Product",
                'content' => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.",
                'price' => '24.99',
                'stars' => '4'
            ],
            [
                'id' => 2,
                'picture' => "https://i.picsum.photos/id/11/900/400.jpg",
                'title' => "My second Product",
                'content' => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.",
                'price' => '60.50',
                'stars' => '5'
            ],
            [
                'id' => 3,
                'picture' => "https://i.picsum.photos/id/12/900/400.jpg",
                'title' => "My third Product",
                'content' => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.",
                'price' => '10.99',
                'stars' => '4'
            ],
            [
                'id' => 4,
                'picture' => "https://i.picsum.photos/id/13/900/400.jpg",
                'title' => "My fourth Product",
                'content' => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.",
                'price' => '99.99',
                'stars' => '4'
            ],
        ];

        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin','*');

        $response->setContent(json_encode($product));

        return $response;
    }
}
