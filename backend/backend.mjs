import PocketBase from 'pocketbase';

// Connexion à PocketBase (modifie l'URL si ton instance est en ligne)
export const pb = new PocketBase('http://127.0.0.1:8090');

// Fonction pour récupérer tous les produits d'une catégorie
export async function getProduitsParCategorie(categorie) {
    try {
        const records = await pb.collection('pain').getFullList({
            filter: `categorie = "${categorie}"`,
            sort: '-created' // tri optionnel par date
        });
        return records;
    } catch (error) {
        console.error(`Erreur lors de la récupération des produits pour "${categorie}"`, error);
        return [];
    }
}
