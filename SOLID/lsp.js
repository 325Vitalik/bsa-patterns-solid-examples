class ItemsRepository {
	delete() {
		// perform a delete query
		this.numberOfDeletedRows = 10;

		return this.numberOfDeletedRows;
	}
}

class BadlyExtendedItemsRepository extends ItemsRepository {
	delete() {
		// perform a delete query
		this.numberOfDeletedRows = 10;

		return; // we broke the behaviour of the parent class because know we return undefined, but expect number
	}
}

class ItemsService {
	constructor(itemsRepository) {
		this.itemsRepository = itemsRepository;
	}

	/**
	 * Notice how this is suppose to return a number. Clients expect it based on the ItemsRepository API in the constructor
	 * @return number
	 */
	delete() {
		return this.itemsRepository.delete();
	}
}

const validItemsService = new ItemsService(new ItemsRepository());
console.log(validItemsService.delete());
const invalidItemsService = new ItemsService(new BadlyExtendedItemsRepository());
console.log(invalidItemsService.delete());
