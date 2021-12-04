define( function(){
    var Model = function(){
        let self = this;
        self.title = ko.observable( "Contact Us" );
    }
    return {
        View : {
            "Layout" : {
                init : ["Linear", "FillXY,Vertical"],
                kids : {
                    "AppBar" : {
                        init : ["Contact Us", "arrow_back"],
                        bind : {
                            href : {
                                ev : "SetOnMenuTouch",
                                path : "about"
                            }
                        }
                    },
                    "TextH3" : {
                        init : ["", 1, -1, "Monospace"],
                        bind : {
                            computed : "title" /* anything that can be subscribed */
                        }
                    },
                    "ButtonElegant" : {
                        init : ["Go Back", 0.35],
                        bind : {
                            href : {
                                ev : "SetOnTouch",
                                path : "about"
                            }
                        }
                    }
                }
            }
        },
        Model : new Model()
    }
} );