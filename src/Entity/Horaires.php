<?php

namespace App\Entity;

use App\Repository\HorairesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=HorairesRepository::class)
 */
class Horaires
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $jour;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $ouvertureMatin;

    /**
     * @ORM\Column(type="string", length=5, nullable=true)
     */
    private $fermetureMatin;

    /**
     * @ORM\Column(type="string", length=5, nullable=true)
     */
    private $ouvertureApresMidi;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $fermetureApresMidi;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJour(): ?string
    {
        return $this->jour;
    }

    public function setJour(string $jour): self
    {
        $this->jour = $jour;

        return $this;
    }

    public function getOuvertureMatin(): ?string
    {
        return $this->ouvertureMatin;
    }

    public function setOuvertureMatin(string $ouvertureMatin): self
    {
        $this->ouvertureMatin = $ouvertureMatin;

        return $this;
    }

    public function getFermetureMatin(): ?string
    {
        return $this->fermetureMatin;
    }

    public function setFermetureMatin(?string $fermetureMatin): self
    {
        $this->fermetureMatin = $fermetureMatin;

        return $this;
    }

    public function getOuvertureApresMidi(): ?string
    {
        return $this->ouvertureApresMidi;
    }

    public function setOuvertureApresMidi(?string $ouvertureApresMidi): self
    {
        $this->ouvertureApresMidi = $ouvertureApresMidi;

        return $this;
    }

    public function getFermetureApresMidi(): ?string
    {
        return $this->fermetureApresMidi;
    }

    public function setFermetureApresMidi(string $fermetureApresMidi): self
    {
        $this->fermetureApresMidi = $fermetureApresMidi;

        return $this;
    }
}
