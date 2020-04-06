<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserFormType;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/form/user", name="add_user")
     */
    public function index(Request $request,UserPasswordEncoderInterface $encoder)
    {
        $user = new User();
        $form = $this->createForm(UserFormType::class, $user);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){

            $user = $form->getData();
            $pass = $encoder->encodePassword($user, $user->getPassword());
            $user->setPassword($pass);

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

        }

        return $this->render('admin/user/index.html.twig', [
            'user' => 'Admin',
            'form_add_user' => $form->createView()
        ]);
    }
}
