<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserCreateCommand extends Command
{
    protected static $defaultName = 'app:user:create';
    protected static $defaultDescription = 'create new user';
    protected $em;
    protected $passwordEncoder;
    public function __construct(
        EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder, string $name = null 
        ){
            parent::__construct($name);
            $this->em = $em;
            $this->passwordEncoder = $passwordEncoder;
        }
    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $user = new User();
        $cryptedPassword = $this->passwordEncoder->encodePassword($user,"Al9t4b&zH6a");

        $user->setEmail("corinne.paque@neuf.fr");
        $user->setPassword($cryptedPassword);
        $user->setRoles(['ROLE_ADMIN']);

        $this->em->persist($user);
        $this->em->flush();
        
        $io->success('User bien crée');

        return Command::SUCCESS;
    }
}
