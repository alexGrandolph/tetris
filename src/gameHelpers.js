export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
  Array.from(Array(STAGE_HEIGHT), () =>
   new Array(STAGE_WIDTH).fill([0, 'clear'])
  ) 

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y= 0; y < player.tetromino.length; y =+ 1) {
    for (let x = 0; x < player.tetromino[y].length; x =+ 1) {

      //1.check that tetromino cell isn't 0
      if (player.tetromino[x][y] !== 0) {
        // 2. check move is inside game area height y, shouldnt go through bottom
        !stage[y + player.pos.y + moveY]
        // 3. check piece isnt moving outside of width x
      
        // 4. check cell that moving to isn't set to clear
      }
 
    }
  }
}