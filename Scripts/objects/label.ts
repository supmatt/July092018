module object{
    export class Lable extends createjs.Text{
        // member variables
        public isCentered:boolean;
        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight:number;
        
        

        /**
         *Creates an instance of Lable.
         * @param {string} text
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColour
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Lable
         */
        constructor(
            text:string, 
            fontSize:string, 
            fontFamily:string, 
            fontColour:string,
            x:number = 0,
            y:number = 0,
            isCentered: boolean = false
        ){
            super(text, fontSize + " " + fontFamily, fontColour);
            this.isCentered = isCentered;
            this._intialize();


            


            if(isCentered){
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }
            this.x = x;
            this.y = y;
        }
        
/**
 *
 *
 * @private
 * @memberof Lable
 */
private _intialize():void{
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.width * 0.5;
        } 

        public Start():void{

        }

        public update():void{

        }
    }
}