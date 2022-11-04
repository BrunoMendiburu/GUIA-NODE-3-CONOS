const conn = require("../db");

const getArtistas = (_, res) => {
    conn.query('SELECT * FROM artistas ', (err, res_db) => { 
        if (err) throw err;
        res.json(res_db);
    });
};

const getArtista = (req, res) => {
    const { id } = req.params;
    conn.query('SELECT * FROM artistas WHERE id = ?', [id], (err, res_db) => { 
        if (err) throw err;
        res.json(res_db);
    });
};

const createArtista = (req, res) => {
    conn.query('INSERT INTO artistas SET ?', req.body, (err, res_db) => {
        if (err) throw err;
        res.json(res_db);
    });
}
//MEJORARRRRRRRRRR
const updateArtista = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    conn.query('UPDATE artistas SET nombre = ? WHERE id = ? ',[nombre, id], (err, res_db) => { 
        if (err) throw err;
        res.json(res_db);
    });
}; 
    // Completar con la consulta que actualiza un artista
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista"
        }
    */

const deleteArtista = (req, res) => {
    const { id } = req.params;

    conn.query('DELETE FROM artistas WHERE id = ?', [id], (err, res_db) => { 
        if (err) throw err;
        res.json(res_db);
    });
    // Completar con la consulta que elimina un artista
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

const getAlbumesByArtista = (req, res) => {
    const { id } = req.params;
    conn.query("SELECT * FROM albumes WHERE artista = ?", [id], (err, res_db) => { 
        if (err) throw err;
        res.json(res_db);
    });
    // Completar con la consulta que devuelve las canciones de un artista 
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getAlbumes
};

const getCancionesByArtista = (req, res) => {
    const { id } = req.params;
    conn.query("SELECT * FROM canciones INNER JOIN albumes ON canciones.album = ? WHERE albumes.id = canciones.id", [id], (err, res_db) => { 
        if (err) throw err;
        res.json(res_db);
    });
    // Completar con la consulta que devuelve las canciones de un artista
    // (tener en cuenta que las canciones están asociadas a un álbum, y los álbumes a un artista)
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
};

module.exports = {
    getArtistas,
    getArtista,
    createArtista,
    updateArtista,
    deleteArtista,
    getAlbumesByArtista,
    getCancionesByArtista,
};