module objects {
    export abstract class GameObject extends createjs.Bitmap {
        public isCentered:boolean;
        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight:number;

        constructor(imageString:string) {
            super(imageString);
            this._intialize();
            
            
        }

        private _intialize():void{
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.width * 0.5;
        } 

        public Start():void{

        }

        public Update():void{

        }
        public Reset():void{

        }
    }
}