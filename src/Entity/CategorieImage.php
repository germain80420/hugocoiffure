<?php

namespace App\Entity;

use App\Repository\CategorieImageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CategorieImageRepository::class)
 */
class CategorieImage
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("categorie")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     *@Groups("categorie")
     */
    private $libelleCategorie;

    /**
     * @ORM\OneToMany(targetEntity=ImageDiaporama::class, mappedBy="categorie")
     * 
     */
    private $imageDiaporamas;

    public function __construct()
    {
        $this->imageDiaporamas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelleCategorie(): ?string
    {
        return $this->libelleCategorie;
    }

    public function setLibelleCategorie(string $libelleCategorie): self
    {
        $this->libelleCategorie = $libelleCategorie;

        return $this;
    }

    /**
     * @return Collection|ImageDiaporama[]
     */
    public function getImageDiaporamas(): Collection
    {
        return $this->imageDiaporamas;
    }

    public function addImageDiaporama(ImageDiaporama $imageDiaporama): self
    {
        if (!$this->imageDiaporamas->contains($imageDiaporama)) {
            $this->imageDiaporamas[] = $imageDiaporama;
            $imageDiaporama->setCategorie($this);
        }

        return $this;
    }

    public function removeImageDiaporama(ImageDiaporama $imageDiaporama): self
    {
        if ($this->imageDiaporamas->removeElement($imageDiaporama)) {
            // set the owning side to null (unless already changed)
            if ($imageDiaporama->getCategorie() === $this) {
                $imageDiaporama->setCategorie(null);
            }
        }

        return $this;
    }
}
