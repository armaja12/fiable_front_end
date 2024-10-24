Getting Started
Follow the steps below to set up and run the project:

1. Clone the Repository
git clone https://github.com/your-username/grid-visualizer.git
cd grid-visualizer

2. Install Dependencies
npm install

3. Run the Development Server
To start the React application locally, run:
npm start
This will start the development server and open the app in your browser. You can view the app at http://localhost:3000.

4. Running Storybook
To run Storybook and see component documentation, use:
npm run storybook
This will start the Storybook server, and you can view the stories at http://localhost:6006.

5. Running Tests
If there are unit tests available for the components, you can run them with:
npm test
This command will run tests using the configured testing framework (e.g., Jest).

Usage
Once the app is running, the GridVisualizer component will visualize an object on a 5x5 grid based on the input string. The input format should be as follows:

x,y DIRECTION
x and y: Coordinates on the grid (ranging from 0 to 4).
DIRECTION: One of NORTH, EAST, SOUTH, or WEST.
Example: 1,1 NORTH will place an object at coordinates (1,1) facing north.

Customization
You can modify the project or add new features by working within the following folders:

src/components/: Add or modify components.
src/utils/: Add utility functions.
src/hooks/: Add custom hooks.
src/theme.ts: Modify the Material UI theme.

Troubleshooting
Common Issues:
npm errors during install: If you encounter issues while installing dependencies, try clearing the npm cache:

npm cache clean --force
Then reinstall the dependencies:

npm install
Hot Module Replacement (HMR) issues: If you encounter issues with Webpack’s HMR, try disabling HMR in Storybook by editing .storybook/main.ts.

Contributing
Feel free to submit issues or pull requests to contribute to this project.

License
This project is licensed under the MIT License - see the LICENSE file for details.