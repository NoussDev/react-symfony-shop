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
     * @Route("/form/product", name="add_product")
     * @Route("/form/edit/{id}", name="edit_product")
     */
    public function index(Request $request, Product $product = null)
    {
        if(!$product){
            $product = new Product();
        }


        $form = $this->createFormBuilder($product)
            ->add("title", TextType::class)
            ->add("picture", TextType::class)
            ->add("content", TextareaType::class)
            ->add("price", IntegerType::class)
            ->add("stars", IntegerType::class)
            ->add("save", SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $product = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($product);
            $em->flush();

            return $this->render('admin/product/index.html.twig', [
                'user' => 'Admin',
                'form_add_product' => $form->createView(),
            ]);
        }

        return $this->render('admin/product/index.html.twig', [
            'user' => 'Admin',
            'form_add_product' => $form->createView(),
        ]);
    }

    /**
     * @Route("/delete/product/{id}", name="delete_product")
     */
    public function delete($id){
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository(Product::class)->find($id);
        $em->remove($product);
        $em->flush();

        return $this->redirectToRoute("admin");
    }
}
