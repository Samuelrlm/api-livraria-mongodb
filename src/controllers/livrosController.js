import livros from "../models/Livro.js";

class LivroController{
    static listarLivros = (req ,res)=>{
        livros.find()
            .populate('autor')
            .populate('editora')
            .exec((err, livros) =>{
                res.status(200).json(livros);
            });
    };

    static exibirLivro = (req, res) =>{
        const id = req.params.id

        livros.findById(id)
            .populate('autor')
            .populate('editora')
            .exec((err, livros) =>{
                if(!err){
                    res.status(200).send(livros)
                }else{
                    res.status(400).send({message: err.message})
                }
            });      
    };

    static cadastrarLivro = (req, res) =>{
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
            } else{
                res.status(201).send(livro.toJSON())
            }
        });
    };

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Livro atualizado com sucesso"})
            } else{
                res.status(500).send({message: err.message})
            }
        });
    };

    static deletarLivro = (req, res) =>{
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: "Livro deletado com sucesso"})
            } else{
                res.status(400).send({message: err.message})
            }
        });
    };    

    static listarLivroPorEditora = (req, res) =>{
        const editora = req.query.editora

        livros.find({'editora': editora},{}, (err, livros)=>{
            res.status(200).send(livros);
        })
    }
};

export default LivroController;