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
     * @Route("/shop/{id}", name="product")
     */
    public function shop()
    {
        return $this->render('base.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->render('base.html.twig');
    }

    /**
     * @Route("/cart", name="cart")
     */
    public function cart()
    {
        return $this->render('base.html.twig');
    }
}
