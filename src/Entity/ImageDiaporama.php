<?php

namespace App\Entity;

use App\Repository\ImageDiaporamaRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * @ORM\Entity(repositoryClass=ImageDiaporamaRepository::class)
 */
class ImageDiaporama
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("image")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups("image")
     */
    private $libelleImage;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups("image")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("image")
     */
    private $textInfo;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("image")
     */
    private $src;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("image")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=CategorieImage::class, inversedBy="imageDiaporamas")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("image")
     */
    private $categorie;

    public function __construct(){
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelleImage(): ?string
    {
        return $this->libelleImage;
    }

    public function setLibelleImage(string $libelleImage): self
    {
        $this->libelleImage = $libelleImage;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getTextInfo(): ?string
    {
        return $this->textInfo;
    }

    public function setTextInfo(?string $textInfo): self
    {
        $this->textInfo = $textInfo;

        return $this;
    }

    public function getSrc(): ?string
    {
        return $this->src;
    }

    public function setSrc(string $src): self
    {
        $this->src = $src;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getCategorie(): ?CategorieImage
    {
        return $this->categorie;
    }

    public function setCategorie(?CategorieImage $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }
}
