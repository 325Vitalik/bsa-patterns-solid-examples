// @nestjs/swagger document builder https://github.com/nestjs/swagger/blob/master/lib/document-builder.ts

const config = new DocumentBuilder()
	.setTitle("Cats example")
	.setDescription("The cats API description")
	.setVersion("1.0")
	.addTag("cats")
	.build();
