# SOP — Site Vitrine Client (Standard Operating Procedure)

## PHASE 1 — Kickoff

- [X] Remplir la checklist-kickoff.md avec le client
- [X] Créer la fiche client dans ClientPortal (même pour troc/gratuit) — à vérifier
- [X] Créer dossier local : `A:\TNTMom-Clients\NomClient-NomBusiness\`
- [X] Copier le contenu de `template-site-vitrine\` dans le nouveau dossier

## PHASE 2 — Setup technique

- [X] Créer repo GitHub : `site-underground-motorsport` (naomie6958/site-underground-motorsport)
- [X] Dans le dossier local : git init + remote configuré
- [X] Remplir le fichier `CNAME` avec le sous-domaine temporaire → `undergroundmotorsport.tntm.ca`
- [X] Ajouter l'enregistrement DNS CNAME chez le registrar tntm.ca
- [X] Premier commit + push
- [X] Activer GitHub Pages
- [X] Vérifier que le site est accessible sur le sous-domaine — confirmé live (screenshot 2026-06-22)

## PHASE 3 — Développement

- [X] Mettre à jour les variables CSS (couleurs, fonts) dans `style.css` — palette rouge/noir/gris + checkerplate en cours de raffinement
- [X] Remplir le contenu HTML (nom, slogan, services, à propos, contact)
- [X] Ajouter les images client dans `images/` — logo + textures checkerplate ajoutés. Le hero utilise un gradient en attendant une vraie photo de Luc (pas bloquant, note laissée dans le CSS)
- [X] Configurer Formspree — fait 2026-07-06/07 (voir Phase 5 ci-dessous), puis **complètement remplacé** le 2026-07-08 par le gestionnaire de formulaires interne ClientPortal (`/api/public/form-submit`) — Formspree n'est plus utilisé du tout sur ce site
- [X] Tester sur mobile (DevTools responsive) — vérifié 2026-07-07 : mobile 375px, tablette 768px, menu hamburger, formulaire diagnostic, aucune régression
- [X] Tester le formulaire — formulaire diagnostic reconstruit au complet (2026-07-06), branché sur le gestionnaire interne ClientPortal (2026-07-08), testé end-to-end (soumission stockée + email envoyé à Luc)
- [X] Valider HTML : validator.w3.org — vérifié 2026-07-07, 0 erreur/avertissement (34 notes info bénignes sur les balises auto-fermantes)

### Changement d'approche — formulaire de diagnostic (2026-07-03)

Le contact form générique devient un vrai formulaire de diagnostic préliminaire — le site web est la porte d'entrée du workflow client de Luc, à la place des messages Facebook Messenger.
- Accroche : "Quel miracle peut-on accomplir pour ton véhicule?"
- Champs obligatoires : nom/coordonnées, année/marque/modèle, description du problème, préférence de recontact (texto/téléphone)
- Champ optionnel : pièces à commander si connues
- Promesse : recontacté sous 6-12h
- **Calendly n'est plus nécessaire** dans ce nouveau flow (éliminé de la liste des choses en attente de Luc)
- À faire en cascade : renommer le CTA "Prendre rendez-vous", ajuster le message de confirmation dans `script.js`

## PHASE 4 — Review client

- [x] Envoyer le lien sous-domaine tntm.ca au client — fait avant le lancement du domaine final
- [x] Retour informel positif — Luc a vu le site et est très satisfait ("capote", "plus que sur la coche") — confirmé 2026-07-02
- [X] Faire les révisions demandées (max 2 rondes incluses dans le prix) — checkerplate, layout Services, formulaire diagnostic faits ; textes (services + à propos) approuvés par Luc — confirmé 2026-07-07
- [x] Obtenir approbation écrite (message texte ou courriel suffit) — approbation finale confirmée par Luc par message 2026-07-10 (traitée comme suffisante, voir ROADMAP-MASTER.md)

## PHASE 5 — Lancement domaine final

- [X] Domaine acheté — **undergroundmotorsport.ca acheté par Naomie sur Namecheap (2026-07-06)**
- [X] Configurer l'email routing Namecheap : admin@undergroundmotorsport.ca → lucbill1991@icloud.com (fait 2026-07-06)
- [X] Créer le formulaire Formspree, remplacer `FORMSPREE_ID` dans index.html (fait 2026-07-06, ID `xdarjawq`)
- [X] Lier lucbill1991@icloud.com dans Formspree et changer le destinataire du form (fait 2026-07-07, via l'onglet Workflow → action Email — pas Settings comme on pensait au départ). Testé end-to-end, Luc a reçu la notification.
- [X] **Domaine connecté — 🚀 SITE LANCÉ le 2026-07-07**
- [X] Mettre à jour le fichier `CNAME` avec le nouveau domaine
- [X] Mettre à jour l'enregistrement DNS chez Namecheap (4× A vers GitHub Pages + CNAME www)
- [X] Supprimer le CNAME temporaire de tntm.ca (undergroundmotorsport + www.undergroundmotorsport)
- [X] Commit + push (fait par Naomie elle-même, guidée)
- [X] Vérifier HTTPS actif — confirmé après propagation, bandeau de maintenance retiré
- [X] Corriger les meta Open Graph/Twitter (pointaient encore vers l'ancien sous-domaine tntm.ca, auraient cassé les aperçus de partage Facebook)
- [x] Archiver les notes client dans `_notes-client.md` — rempli tout au long du mandat

---

## Notes importantes

- Ne jamais commiter `_notes-client.md` (contient mots de passe, infos privées)
- Toujours utiliser des images optimisées (max 300 Ko par image — utiliser squoosh.app)
- Nommer les images en minuscules sans espaces : `hero-garage.jpg` pas `Photo Garage.JPG`
- Garder un historique git propre : un commit par section complétée
