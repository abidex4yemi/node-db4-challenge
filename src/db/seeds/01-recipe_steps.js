/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_steps')
    .truncate()
    .then(() => knex('recipe_steps').insert([
      {
        recipe_id: 1,
        step_number: 1,
        step_description:
						'Toast the cumin seeds in a medium saute pan over medium-low heat for 5 minutes, or until fragrant.',
      },
      {
        recipe_id: 1,
        step_number: 2,
        step_description:
						'In a blender, combine the cumin seeds, jalapenos, garlic, pepper, lime juice, and salt. Pulse the blender to finely chop ingredients. Add the oil and cilantro and puree until smooth.',
      },
      {
        recipe_id: 1,
        step_number: 3,
        step_description:
						'Lightly score both sides of the meat with a knife so that the marinade will penetrate. Place the meat in a large plastic bag or bowl, pour in the marinade, and coat well. Marinate in the refrigerator for 24 to 48 hours.',
      },
      {
        recipe_id: 1,
        step_number: 4,
        step_description: 'Preheat an outdoor grill for high heat and lightly oil grate.',
      },
      {
        recipe_id: 2,
        step_number: 1,
        step_description:
						'Toast the cumin seeds in a medium saute pan over medium-low heat for 5 minutes, or until fragrant.',
      },
      {
        recipe_id: 2,
        step_number: 2,
        step_description:
						'In a blender, combine the cumin seeds, jalapenos, garlic, pepper, lime juice, and salt. Pulse the blender to finely chop ingredients. Add the oil and cilantro and puree until smooth.',
      },
      {
        recipe_id: 2,
        step_number: 3,
        step_description:
						'Lightly score both sides of the meat with a knife so that the marinade will penetrate. Place the meat in a large plastic bag or bowl, pour in the marinade, and coat well. Marinate in the refrigerator for 24 to 48 hours.',
      },
      {
        recipe_id: 2,
        step_number: 4,
        step_description: 'Preheat an outdoor grill for high heat and lightly oil grate.',
      },
      {
        recipe_id: 2,
        step_number: 5,
        step_description:
						'Remove the meat from the marinade and discard the remaining marinade. Cook on high, 1 to 2 minutes per side, to sear the meat. Turn the heat down to low and cook for an additional 3 to 4 minutes per side, or until the it has reached the desired doneness.',
      },
      {
        recipe_id: 3,
        step_number: 1,
        step_description:
						'Toast the cumin seeds in a medium saute pan over medium-low heat for 5 minutes, or until fragrant.',
      },
      {
        recipe_id: 3,
        step_number: 2,
        step_description:
						'In a blender, combine the cumin seeds, jalapenos, garlic, pepper, lime juice, and salt. Pulse the blender to finely chop ingredients. Add the oil and cilantro and puree until smooth.',
      },
      {
        recipe_id: 3,
        step_number: 3,
        step_description:
						'Lightly score both sides of the meat with a knife so that the marinade will penetrate. Place the meat in a large plastic bag or bowl, pour in the marinade, and coat well. Marinate in the refrigerator for 24 to 48 hours.',
      },
      {
        recipe_id: 3,
        step_number: 4,
        step_description: 'Preheat an outdoor grill for high heat and lightly oil grate.',
      },
      {
        recipe_id: 4,
        step_number: 1,
        step_description:
						'Toast the cumin seeds in a medium saute pan over medium-low heat for 5 minutes, or until fragrant.',
      },
      {
        recipe_id: 4,
        step_number: 2,
        step_description:
						'In a blender, combine the cumin seeds, jalapenos, garlic, pepper, lime juice, and salt. Pulse the blender to finely chop ingredients. Add the oil and cilantro and puree until smooth.',
      },
      {
        recipe_id: 4,
        step_number: 3,
        step_description:
						'Lightly score both sides of the meat with a knife so that the marinade will penetrate. Place the meat in a large plastic bag or bowl, pour in the marinade, and coat well. Marinate in the refrigerator for 24 to 48 hours.',
      },
      {
        recipe_id: 4,
        step_number: 4,
        step_description: 'Preheat an outdoor grill for high heat and lightly oil grate.',
      },
      {
        recipe_id: 4,
        step_number: 5,
        step_description:
						'Remove the meat from the marinade and discard the remaining marinade. Cook on high, 1 to 2 minutes per side, to sear the meat. Turn the heat down to low and cook for an additional 3 to 4 minutes per side, or until the it has reached the desired doneness.',
      },
    ]));
};
