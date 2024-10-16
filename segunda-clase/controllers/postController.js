const database = [
    { id: 1, title: 'Publicación 1', description: 'Descripción 1', url: 'https://example.com/img1' },
    { id: 2, title: 'Publicación 2', description: 'Descripción 2', url: 'https://example.com/img2' }
];

class PostController {
    // Listar todas las publicaciones
    getPosts(req, res) {          
        let error ="";
        let data=[];
        if (database.length===0) {
            error += `Crea un post primero`;
        } else {            
            database.forEach(element => {                
                this.id = element.id;
                this.title = element.title;
                this.description = element.description;
                this.url = element.url;
            });
        }
        setTimeout(()=>{
            res(error != '' ? new Error(error):null, data=database);
        });
    }

    // Crear una nueva publicación
    createPost(req, res) {
        let error ="";
        let data=[];
        const { title, description, url } = req;
        let lastId = 0;
        if (database.length > 0) {
            lastId = Math.max(...database.map(item => item.id));
        }
        let newID = lastId + 1;
        this.id=newID;
        this.title = title;
        this.description = description;
        this.url = url;
        database.push({id: newID, title, description, url});
        setTimeout(()=>{
            res(error != '' ? new Error(error):null, data=database);
        });
    }

    
    // Editar una publicación
    updatePost(params, body, res) {
        let error = "";
        let data = [];
        //Buscar el usurio por Id
        const id = params.id;
        const {title, description, url} = body;
        const searchId = database.findIndex(post => post.id === parseInt(id));
        if (searchId !== -1) {
            database[searchId] = {
                ...database[searchId],
                title,
                description,
                url
            };
        } else {
            error += "No se encontro el post"
        }
        setTimeout(()=>{
            res(error != '' ? new Error(error):null, data=database);
        });
    }

    // Eliminar una publicación
    deletePost(req, res) {
        let error ="";
        let data=[];
        //buscar el id del post en la solicitud
        const id = req.id;
        const searchId = database.findIndex(post => post.id === parseInt(id));
        if (searchId !== -1) {
            //eliminar el usuario encontrado
            database.splice(searchId, 1);
        } else {
            error += "No se encontro el post"
        }
        setTimeout(()=>{
            res(error != '' ? new Error(error):null, data=database);
        });
    }

// Obtener publicaciones de un usuario específico
    getUserPosts(req, res) {
        const { userId } = req.params;
        // Aquí obtendrás las publicaciones del usuario con ID = userId
        const userPosts = [
            { id: 1, title: 'Publicación 1', description: 'Descripción 1', url: 'https://example.com/img1', userId },
        ];
        res.status(200).json(userPosts);
    }
}


module.exports = new PostController();
