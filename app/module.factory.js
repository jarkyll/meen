var Factory = function(Schema, mongoose) {
	this.Schema = Schema
	this.mongoose = mongoose
	this.Item = null



	this.createSchemas = function() {
		PersonSchema = new this.Schema({
			name: String,
			surname: String,
			age: Number
		})
		// assigning Person to the personschema
		this.Person = mongoose.model('Person', PersonSchema)
	}



	this.insertPeople = function() {
		//making a person following the person model
		var nabeel = new this.Person({
			name: 'Nabeel',
			surname: 'Virani',
			age: 22
		})

		var hektor = new this.Person({
			name: 'hektor',
			surname: 'baboden',
			age: 34
		})

		hektor.save()
		nabeel.save()
		//save the models to the database
	}

	this.getPerson = function(query, res) {
		this.Person.find(query, function(error, output){
			res.json(output)
		})
	}
}

module.exports = Factory