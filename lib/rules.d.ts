declare function peg$subclass(child: any, parent: any): void;
declare function peg$SyntaxError(message: any, expected: any, found: any, location: any): void;
declare namespace peg$SyntaxError {
    var buildMessage: (expected: any, found: any) => string;
}
declare function peg$parse(input: any, options: any): any;
