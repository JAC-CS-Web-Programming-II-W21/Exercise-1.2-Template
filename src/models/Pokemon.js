const Model = require('./Model');

class Pokemon extends Model {
	/**
	 * Creates a new Pokemon.
	 * @param {number} id
	 * @param {string} name
	 * @param {string} type
	 */
	constructor(id, name, type) {

	}

	/**
	 * Creates a new Pokemon in the database and returns a Pokemon object.
	 * @param {string} name The Pokemon's name (ex. Bulbasaur).
	 * @param {string} type The Pokemon's type (ex. Grass).
	 * @returns {Pokemon} The created Pokemon.
	 */
	static async create(name, type) {
		const connection = await Model.connect();
	}

	/**
	 * Finds the Pokemon by their ID and returns a Pokemon object.
	 * @param {number} id The Pokemon's ID.
	 * @returns {Pokemon} The Pokemon object.
	 */
	static async findById(id) {
		const connection = await Model.connect();
	}

	/**
	 * Finds the Pokemon by their name and returns a Pokemon object.
	 * @param {string} name The Pokemon's name.
	 * @returns {Pokemon} The Pokemon object.
	 */
	static async findByName(name) {
		const connection = await Model.connect();
	}

	/**
	 * Persists the current state of this Pokemon object to the database.
	 * @returns {boolean} If the operation was successful.
	 */
	async save() {
		const connection = await Model.connect();
	}

	/**
	 * Deletes the Pokemon with this ID from the database.
	 * @returns {boolean} If the operation was successful.
	 */
	async delete() {
		const connection = await Model.connect();
	}
}

module.exports = Pokemon;
