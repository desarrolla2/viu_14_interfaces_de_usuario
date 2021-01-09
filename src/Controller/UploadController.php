<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Image;

class UploadController extends AbstractController
{
    /**
     * @Route("/image", name="image")
     */
    public function image(): Response
    {
        return $this->render('upload/image.html.twig', ['filters' => $this->getAvailableFilters()]);
    }

    /**
     * @Route("/upload", name="upload")
     */
    public function index(Request $request): Response
    {
        $form = $this->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute('image');
        }

        return $this->render('upload/index.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/view", name="view")
     */
    public function view(): Response
    {
        return $this->render('upload/view.html.twig');
    }

    protected function getAvailableFilters(): array
    {
        return [
            '1977' => '_1977',
            'Aden' => 'aden',
            'Brannan' => 'brannan',
            'Brooklyn' => 'brooklyn',
            'Clarendon' => 'clarendon',
            'Earlybird' => 'earlybird',
            'Gingham' => 'gingham',
            'Hudson' => 'hudson',
            'Inkwell' => 'inkwell',
            'Kelvin' => 'kelvin',
            'Lark' => 'lark',
            'Lo - Fi' => 'lofi',
        ];
    }

    protected function getForm(): FormInterface
    {
        return $this->createFormBuilder()
            ->add(
                'image',
                FileType::class,
                [
                    'label' => 'Sube una foto de tu apetitosa comida',
                    'attr' => ['accept' => '.jpg, .png, .jpeg, .svn'],
                    'constraints' => [
                        new Image(),
                    ],
                ]
            )
            ->getForm();
    }
}
