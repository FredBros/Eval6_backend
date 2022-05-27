const deleteOneStuff = (req, res, Model, id) => {

    Model.destroy({where:{code_name : id}})
    .then ((deleted) =>{
        if (deleted===0) {
            const message =
              "Échec de la suppression de l'item. L'item n'a pas été trouvé.";
            return res.status(404).json({ message});
        }
        const message =
          "L'item a bien été effacé.";
        return res.status(200).json({ message });

    })
    .catch((error)=> {
        const message = "Échec de la suppression de l'item. Veuillez réessayer dans quelques instants."
        res.status(500).json({ message, data: error})
    })
}

export default deleteOneStuff;