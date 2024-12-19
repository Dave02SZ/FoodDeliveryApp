package com.fooddelivery.fooddeliveryserver.models;

import com.fooddelivery.fooddeliveryserver.models.enums.FoodType;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Data
@Entity
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    private String description;
    private String ingredients;
    private int price;

    @Enumerated(EnumType.STRING)
    @Column(name = "foodType")
    private FoodType foodType;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<OrderItem>();
}
