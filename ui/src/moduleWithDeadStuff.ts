// OK: This class is used
export class ClassWithDeadMethod {
  // Problem: Knip does not report this method as dead
  public deadMethod() {
    return "oh no";
  }

  // OK: This method is used
  public aliveMethod() {
    return "hey";
  }
}

// Problem: Knip does not report this export as dead
export const deadExport = 1;
