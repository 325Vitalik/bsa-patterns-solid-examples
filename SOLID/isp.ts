//#region bad
interface Character {
  shoot(): void;
  swim(): void;
  talk(): void;
  dance(): void;
}

class Person implements Character {
  public shoot(): void {
    // ...
  }

  public swim(): void {
    // ...
  }

  public talk(): void {
    // ...
  }

  public dance(): void {
    // ...
  }
}

class Troll implements Character {
  public shoot(): void {
    // ...
  }

  public swim(): void {
    // a troll can't swim
  }

  public talk(): void {
    // a troll can't talk
  }

  public dance(): void {
    // ...
  }
}
//#endregion

//#region better
interface Talker {
  talk(): void;
}

interface Shooter {
  shoot(): void;
}

interface Swimmer {
  swim(): void;
}

interface Dancer {
  dance(): void;
}

class Person implements Talker, Shooter, Swimmer, Dancer {
  public shoot(): void {
    // ...
  }

  public swim(): void {
    // ...
  }

  public talk(): void {
    // ...
  }

  public dance(): void {
    // ...
  }
}

class Troll implements Shooter, Dancer {
  public shoot(): void {
    // ...
  }

  public dance(): void {
    // ...
  }
}
//#endregion