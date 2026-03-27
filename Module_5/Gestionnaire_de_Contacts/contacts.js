console.log(`// ================================
// GESTIONNAIRE DE CONTACTS
// `)
const contactList = [
    {
        nom: "Dupont",
        prenom: "Clara",
        email: "clara.dupont@mail.fr",
        telephone: "+33 6 12 34 56 78",
        ville: "Paris",
        age: 28
    },
    {
        nom: "Martin",
        prenom: "Lucas",
        email: "lucas.martin@mail.fr",
        telephone: "+33 6 98 76 54 32",
        ville: "Lyon",
        age: 35
    },
    {
        nom: "Bernard",
        prenom: "Emma",
        email: "emma.bernard@mail.fr",
        telephone: "+33 7 11 22 33 44",
        ville: "Paris",
        age: 22
    },
    {
        nom: "Petit",
        prenom: "Hugo",
        email: "hugo.petit@mail.fr",
        telephone: "+33 6 55 66 77 88",
        ville: "Marseille",
        age: 41
    },
    {
        nom: "Durand",
        prenom: "Léa",
        email: "lea.durand@mail.fr",
        telephone: "+33 6 44 33 22 11",
        ville: "Lyon",
        age: 29
    },
    {
        nom: "Leroy",
        prenom: "Tom",
        email: "tom.leroy@mail.fr",
        telephone: "+33 7 88 99 00 11",
        ville: "Paris",
        age: 19
    },
    {
        nom: "Moreau",
        prenom: "Julie",
        email: "julie.moreau@mail.fr",
        telephone: "+33 6 22 44 66 88",
        ville: "Nice",
        age: 33
    },
    {
        nom: "Roux",
        prenom: "Nathan",
        email: "nathan.roux@mail.fr",
        telephone: "+33 7 33 55 77 99",
        ville: "Marseille",
        age: 26
    }
];

function lancerMenu() {
    console.log("Sélectionnez une des options ou appuyez sur Q pour quitter.")
    let choix;
    do {
        console.log(`Options du menu principal :
    1. Afficher tous les contacts
    2. Rechercher un contact
    3. Filtrer par ville
    4. Filtrer par tranche d'âge
    5. Trier les contacts
    6. Ajouter un contact
    7. Supprimer un contact
    8. Statistiques
    9. Quitter`);
        choix = prompt("Sélectionnez une option: ");
        switch (choix) {
            case "1":
                console.log("--- LISTE DES CONTACTS ---");
                afficherContacts()
                break;
            case "2":
                console.log("--- RECHRERCHER CONTACT ---");
                rechercherContact()
                break;
            case "3":
                console.log("--- FILTRER PAR VILLE ---");
                filtrerParVille()
                break;
            case "4":
                console.log("--- FILTRAGE PAR TRANCHE D'AGE ---");
                filtrerParAge()
                break;
            case "5":
                console.log("--- TRIER DES CONTACTS ---");
                trierContacts()
                break;
            case "6":
                console.log("--- AJOUTER UN CONTACT ---");
                ajouterContact()
                break;
            case "7":
                console.log("--- SUPPRIMER UN CONTACT ---");
                supprimerContact()
                break;
            case "8":
                console.log("--- Statistiques ---");
                break;
            case "9":
            case "Q":
            case "q":
            case null:
                break;
            default:
                console.log("Option invalide. Veuillez réessayer.");
                break
        }
    } while (choix !== "Q" && choix !== "q" && choix !== null && choix !== "Quitter" && choix !== "9");
    return "Au revoir !";
}


// ------------------------------------------- AFFICHER CONTACTS ------------------------------------------------------


function afficherContacts() {
    console.log(`Liste des contacts (${contactList.length}):`);
    console.log("─".repeat(50));
    contactList.forEach(contact => {
        console.log(`${contact.prenom} ${contact.nom} | ${contact.ville} | ${contact.age} ans | ${contact.email}`);
    });

    console.log("─".repeat(50));
}



// ------------------------------------------- RECHRERCHER CONTACT ------------------------------------------------------

function rechercherContact() {
    const recherche = prompt("Entrez le nom ou le prénom du contact à rechercher : ");
    if (!recherche || !recherche.trim()) {
        console.log("Recherche annulée ou Age vide.");
        return;
    }

    const rechercheNettoyee = recherche.trim().toLowerCase();

    const contactTrouve = contactList.find(contact => {
        const nomMinuscule = contact.nom.toLowerCase();
        const prenomMinuscule = contact.prenom.toLowerCase();
        return nomMinuscule.includes(rechercheNettoyee) || prenomMinuscule.includes(rechercheNettoyee);
    });

    if (contactTrouve) {
        console.log("Contact trouvé:");
        console.log("─".repeat(50));
        console.log(`${contactTrouve.prenom} ${contactTrouve.nom} | ${contactTrouve.ville} | ${contactTrouve.age} ans | ${contactTrouve.email}`);
        console.log("─".repeat(50));
    } else {
        console.log(`Aucun contact trouvé pour "${recherche}".`);
    }
}


// ------------------------------------------- FILTRER PAR VILLE ------------------------------------------------------

function filtrerParVille() {
    const villeRecherchee = prompt("Entrez le nom de la ville pour filtrer les contacts : ");

    if (!villeRecherchee || !villeRecherchee.trim()) {
        console.log("Filtrage annulé ou Age vide.");
        return;
    }

    const villeNettoyee = villeRecherchee.trim().toLowerCase();

    const contactsFiltrés = contactList.filter(contact => {
        return contact.ville.toLowerCase() === villeNettoyee;
    });

    if (contactsFiltrés.length > 0) {
        console.log(`Contacts trouvés à ${villeRecherchee.trim()} (${contactsFiltrés.length}) :`);
        console.log("─".repeat(50));
        for (const contact of contactsFiltrés) {
            console.log(`${contact.prenom} ${contact.nom} | ${contact.email} | ${contact.age} ans`);
        }

        console.log("─".repeat(50));
    } else {
        console.log(`Aucun contact trouvé dans la ville de "${villeRecherchee.trim()}".`);
    }
}

// ------------------------------------------- FILTRER PAR AGE ------------------------------------------------------

function filtrerParAge() {
    const minAge = prompt("Entrez l'âge minimum :");
    const maxAge = prompt("Entrez l'âge maximum :");

    const ageMin = Number(minAge);
    const ageMax = Number(maxAge);


    if (isNaN(ageMin) || isNaN(ageMax)) {
        console.log("Erreur : Veuillez entrer des nombres valides pour l'âge.");
        return;
    }

    if (ageMin > ageMax) {
        console.log("Erreur : L'âge minimum ne peut pas être supérieur à l'âge maximum.");
        return;
    }

    const contactsFiltres = contactList.filter(contact => {
        return contact.age >= ageMin && contact.age <= ageMax;
    });

    if (contactsFiltres.length > 0) {
        console.log(`Contacts âgés de ${ageMin} à ${ageMax} ans (${contactsFiltres.length}):`);
        console.log("─".repeat(50));

        for (const contact of contactsFiltres) {
            console.log(`${contact.prenom} ${contact.nom} | ${contact.age} ans | ${contact.ville}`);
        }

        console.log("─".repeat(50));
    } else {
        console.log(`Aucun contact trouvé entre ${ageMin} et ${ageMax} ans.`);
    }
}

// ------------------------------------------- TRIER CONTACTS ------------------------------------------------------

function trierContacts() {
    const choix = prompt("Trier par :\n1. Nom (A-Z)\n2. Âge (croissant)");

    if (!choix) return;

    let contactsTries = [...contactList]; // Créer une copie du tableau car .sort() modifie l'original

    if (choix === "1") {
        contactsTries.sort((a, b) => {
            return a.nom.localeCompare(b.nom, "fr", { sensitivity: "base" }); // sensitivity: "base" - considère les lettres a, A, á comme équivalentes lors du tri.
        });
    } else if (choix === "2") {
        contactsTries.sort((a, b) => a.age - b.age);
    } else {
        console.log("Choix invalide.");
        return;
    }

    console.log("Liste triée :");
    console.log("─".repeat(50));
    for (const c of contactsTries) {
        console.log(`${c.nom} ${c.prenom} | Age: ${c.age}`);
    }
    console.log("─".repeat(50));
}

// ------------------------------------------- SUPPRIMER CONTACTS ------------------------------------------------------

function supprimerContact() {
    const nomRecherche = prompt("Entrez le nom du contact à supprimer :");

    if (!nomRecherche || !nomRecherche.trim()) {
        console.log("Suppression annulée personAge vide.");
        return;
    }

    const nomNettoye = nomRecherche.trim().toLowerCase();

    const index = contactList.findIndex(contact => {
        return contact.nom.toLowerCase() === nomNettoye;
    });

    if (index === -1) {
        console.log(`Aucun contact trouvé avec le nom "${nomRecherche}".`);
        return;
    }

    const contactSupprime = contactList.splice(index, 1);

    console.log(`Le contact ${contactSupprime[0].prenom} ${contactSupprime[0].nom} a été supprimé avec succès.`);
}

// ------------------------------------------- AJOUTER CONTACTS ------------------------------------------------------


function ajouterContact() {
    const nom = prompt("Entrez le nom :");
    const prenom = prompt("Entrez le prénom :");
    const email = prompt("Entrez l'email :");
    const telephone = prompt("Entrez le téléphone :");
    const ville = prompt("Entrez la ville :");
    const personAge = prompt("Entrez l'âge :");


    if (!nom || !prenom || !email || !ville || !personAge) {
        console.log("Ajout annulé : tous les champs obligatoires doivent être remplis.");
        return;
    }


    const age = Number(personAge);
    if (isNaN(age)) {
        console.log("Ajout annulé : l'âge doit être un nombre valide.");
        return;
    }

    const nouveauContact = {
        nom: nom.trim(),
        prenom: prenom.trim(),
        email: email.trim(),
        telephone: telephone.trim(),
        ville: ville.trim(),
        age: age
    };

    contactList.push(nouveauContact);

    console.log(`Le contact ${nouveauContact.prenom} ${nouveauContact.nom} a été ajouté avec succès !`);
}

// ------------------------------------------- AFFICHER STATISTIQUE ------------------------------------------------------

function afficherStatistiques() {
    if (contactList.length === 0) {
        console.log("Impossible de calculer les statistiques : la liste des contacts est vide.");
        return;
    }

    // Length of contact list
    const totalContacts = contactList.length;

    // average age
    let sommeAges = 0;
    contactList.forEach(contact => {
        sommeAges += contact.age;
    });
    const ageMoyen = sommeAges / totalContacts;

    // min max age
    const tousLesAges = contactList.map(contact => contact.age);
    const ageMin = Math.min(...tousLesAges);
    const ageMax = Math.max(...tousLesAges);

    const plusJeune = contactList.filter(contact => contact.age === ageMin);
    const plusAge = contactList.filter(contact => contact.age === ageMax);

    // Count conctacts per city
    const toutesLesVilles = contactList.map(contact => contact.ville);
    const villesUniques = [...new Set(toutesLesVilles)];

    let villeTop = "";
    let maxContacts = 0;

    villesUniques.forEach(ville => {
        const contactsDansCetteVille = contactList.filter(contact => contact.ville === ville).length;

        if (contactsDansCetteVille > maxContacts) {
            maxContacts = contactsDansCetteVille;
            villeTop = ville;
        }
    });

    console.log("\n--- STATISTIQUES ---");
    console.log("─".repeat(50));
    console.log(`Nombre total de contacts : ${totalContacts}`);
    console.log(`Âge moyen : ${ageMoyen.toFixed(1)} ans`);
    console.log(`Le(s) plus jeune(s):`)
    plusJeune.forEach(contact => console.log(`${contact.prenom} ${contact.nom} (${ageMin} ans)`))
    console.log(`Le(s) plus age(s):`)
    plusAge.forEach(contact => console.log(`${contact.prenom} ${contact.nom} (${ageMax} ans)`))
    console.log(`Ville la plus représentée : ${villeTop} (${maxContacts} contacts)`);
    console.log("─".repeat(50));
}

// ------------------------------------------- EXTRAIRE EMAILS (SUPPLÉMENTAIRE) ------------------------------------------------------

function extraireEmailsTries() {
    console.log("--- EMAILS DES ADULTES TRIÉS PAR NOM ---");
    console.log("─".repeat(50));

    const emails = contactList
        .filter(contact => contact.age >= 18)
        .sort((a, b) => a.nom.localeCompare(b.nom, "fr", { sensitivity: "base" }))
        .map(contact => contact.email);

    if (emails.length > 0) {
        emails.forEach(email => console.log(email));
    } else {
        console.log("Aucun adulte trouvé.");
    }
    console.log("─".repeat(50));
}