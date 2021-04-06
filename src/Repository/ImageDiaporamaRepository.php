<?php

namespace App\Repository;

use App\Entity\ImageDiaporama;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ImageDiaporama|null find($id, $lockMode = null, $lockVersion = null)
 * @method ImageDiaporama|null findOneBy(array $criteria, array $orderBy = null)
 * @method ImageDiaporama[]    findAll()
 * @method ImageDiaporama[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ImageDiaporamaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ImageDiaporama::class);
    }

    // /**
    //  * @return ImageDiaporama[] Returns an array of ImageDiaporama objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ImageDiaporama
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
