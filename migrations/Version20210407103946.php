<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210407103946 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie_image (id INT AUTO_INCREMENT NOT NULL, libelle_categorie VARCHAR(30) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE image_diaporama ADD categorie_id INT NOT NULL');
        $this->addSql('ALTER TABLE image_diaporama ADD CONSTRAINT FK_AFE483EABCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie_image (id)');
        $this->addSql('CREATE INDEX IDX_AFE483EABCF5E72D ON image_diaporama (categorie_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE image_diaporama DROP FOREIGN KEY FK_AFE483EABCF5E72D');
        $this->addSql('DROP TABLE categorie_image');
        $this->addSql('DROP INDEX IDX_AFE483EABCF5E72D ON image_diaporama');
        $this->addSql('ALTER TABLE image_diaporama DROP categorie_id');
    }
}
