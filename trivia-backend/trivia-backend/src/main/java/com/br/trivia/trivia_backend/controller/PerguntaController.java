package com.br.trivia.trivia_backend.controller;



import com.br.trivia.trivia_backend.model.Pergunta;
import com.br.trivia.trivia_backend.repository.PerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/perguntas")
public class PerguntaController {

    @Autowired
    private PerguntaRepository perguntaRepository;


    @GetMapping
    public List<Pergunta> getAllPerguntas() {
        return perguntaRepository.findAll();
    }


    @PostMapping
    public Pergunta adicionarPergunta(@RequestBody Pergunta pergunta) {
        return perguntaRepository.save(pergunta);
    }

    @GetMapping("/{id}")
    public Pergunta getPerguntaById(@PathVariable Long id){
        return perguntaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pergunta não encontrada: " + id));
    }

    @GetMapping("/aleatoria")
    public Pergunta getPerguntaAleatoria(){
        List<Pergunta> perguntas = perguntaRepository.findAll();
        int index = (int) (Math.random() * perguntas.size());
        return perguntas.get(index);
    }
}
