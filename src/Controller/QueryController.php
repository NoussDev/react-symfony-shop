<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class QueryController extends AbstractController
{
    /**
     * @Route("/api/products", name="products")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getProducts(ProductRepository $productRepository)
    {
        return $this->json($productRepository->findAll(), 200);
    }
}
