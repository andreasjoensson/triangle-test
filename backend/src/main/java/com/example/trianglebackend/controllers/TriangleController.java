package com.example.trianglebackend.controllers;
import com.example.trianglebackend.models.Triangle;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TriangleController {

    @PostMapping("/triangle")
    public String calculateTriangle(@RequestBody Triangle triangle){
        if (triangle.getX() == 90 || triangle.getY() == 90 || triangle.getZ() == 90) {
            return "Right Angled";
        }
        if (triangle.getX() == triangle.getY() && triangle.getY() == triangle.getZ() ) {
            return "Equilateral";
        }
        else if (triangle.getX() == triangle.getY() || triangle.getY() == triangle.getZ() || triangle.getZ() == triangle.getX() ) {
            return "Isosceles";
        }
        else{
            return "Scalene";
        }

    }

}
