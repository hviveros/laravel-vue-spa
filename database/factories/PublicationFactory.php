<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
// Para el slug
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Publication>
 */
class PublicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title'     => $title = fake()->sentence(),
            'slug'      => Str::slug($title),
            'excerpt'   => $this->faker->text(300),
            'body'      => $this->faker->text(1200),
        ];
    }
}
