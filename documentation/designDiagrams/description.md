### D0
* D0 shows the overall flow of our application stack. It gives a very high level view of each layer, including a frontend, middleware, and Engine. It also shows the use of a database whic hwe will go more in detail with our other design diagrams.
![D0](https://github.com/ChrisTatlonghari/BootstrapBuddies/blob/main/documentation/designDiagrams/D0.png?raw=true "D0")

### D1
* D1 shows a lot more detail that zeros in on each individual layer. Starting with the Front end, we will be using react which utilizes a component based architecture. Our Middleware will be a simple web API that will be the center piece of our stack. It will have direct access to the Database and the chess engine. This is to add a level of abstraction between the web app and the engine / database. Our chess engine will use C# and our database will utilize mySQL.

  ![D1](https://github.com/ChrisTatlonghari/BootstrapBuddies/blob/main/documentation/designDiagrams/D1.png?raw=true "D1")
### D2
* D2 shows even more detail that focuses more on different types of methods that will be needed for our application to work. Starting with the front end, we have methods such as  ```onDrop() ```,  ```onDrag() ```, ```onClick()```, and  ```onHover() ```. All these methods will be neccessary in designing a functional chess web app. Methods that will be needed for our backend chess engine include  ```move() ```  ```moveOutgoing() ``` and  ```processMove() ```. We also have an analysis section that includes methods specifically for analyzing a chess game.
![D2](https://github.com/ChrisTatlonghari/BootstrapBuddies/blob/main/documentation/designDiagrams/D2.png?raw=true "D2")
