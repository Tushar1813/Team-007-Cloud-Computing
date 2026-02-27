package com.example.demo;

import com.example.demo.entity.Expenditure;
import com.example.demo.repository.ExpenditureRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.util.Arrays;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner initData(ExpenditureRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.saveAll(Arrays.asList(
                    new Expenditure("Server Infrastructure", new BigDecimal("15000.00"), 2024),
                    new Expenditure("Software Licenses", new BigDecimal("4500.50"), 2024),
                    new Expenditure("Marketing Campaigns", new BigDecimal("8200.00"), 2024),
                    new Expenditure("Employee Training", new BigDecimal("3200.00"), 2024),
                    new Expenditure("Office Equipment", new BigDecimal("12500.75"), 2024)
                ));
            }
        };
    }
}
