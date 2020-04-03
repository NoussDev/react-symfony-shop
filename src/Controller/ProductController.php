<?php

namespace App\Controller;

use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    /**
     * @Route("/add/product", name="add_product")
     */
    public function index(Request $request)
    {
        $product = new Product();
        $form = $this->createFormBuilder($product)
            ->add("title", TextType::class)
            ->add("content", TextareaType::class)
            ->add("picture", TextType::class)
            ->add("price", IntegerType::class)
            ->add("stars", IntegerType::class)
            ->add("save", SubmitType::class)
            ->getForm();

        return $this->render('admin/product/index.html.twig', [
            'user' => 'Admin',
            'form_add_product' => $form->createView(),
        ]);
    }
}
