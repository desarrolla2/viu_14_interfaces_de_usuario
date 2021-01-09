<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TimelineController extends AbstractController
{
    /**
     * @Route("/timeline", name="timeline")
     */
    public function index(): Response
    {
        return $this->render(
            'timeline/index.html.twig',
            [
                'names' => [
                    '',
                    'Alexandra',
                    'Martina',
                    'Carla',
                    'Juana',
                    'Esther',
                    'Emma',
                    'Eduardo',
                    'Elisa',
                    'Dark',
                    'Jedi',
                ],
            ]
        );
    }
}
