package com.example.demo.controller;

import com.example.demo.entity.Expenditure;
import com.example.demo.repository.ExpenditureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ExpenditureController {

    private final ExpenditureRepository repository;

    @Autowired
    public ExpenditureController(ExpenditureRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/expenditures")
    public List<Expenditure> getAllExpenditures() {
        return repository.findAll();
    }
}
