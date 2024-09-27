# Quest-Chronicles
Quest-Chronicles is a developer-focused blog platform where users can share their insights, post articles, comment on others' content, and actively engage with the tech community!

- Users can sign up by creating a unique username and password. Once registered, they can log in, access their account, and log out when done.

- The homepage displays a list of blog posts, including titles and the dates they were published.

- In the dashboard, users can view all their blog posts and create, edit, or delete posts with ease.

- Want to write a new post? Just hit **Create New Post**, add a title and content, and publish it instantly! Editing or deleting posts is just as simple.

- Users can read through comments on any blog post to see the community's thoughts.

- Ready to participate? Logged-in users can leave comments on posts and engage with other developers.

- Navigate back to the homepage easily, access your dashboard to manage your posts, and log out with a click when finished.


## Installation

To install Dev Discussions:

- Clone the repository

- Navigate to the project directory

- Open the terminal and install the dependencies by running the command: `npm install`

- Set up the PostgreSQL database:

  - Enter `psql -U postgres` to open the PostgreSQL command line interface. If prompted, input your password.
  - To set up the database, type `\i schema.sql` and press Enter.
  Now your database is ready to use!

- Remove '.EXAMPLE' from the .env.EXAMPLE file renaming it to .env

- Configure that .env file with your database credentials

- Seed data to your database. In the terminal run the command: `npm run seed`

## Usage

- Start the application, in the terminal run the command: `npm start`


## Credits

This project was made possible with the help of:

- **Joem Casusi (Tutor)** for guidance and support throughout the development process.

