class Program {
  public static Main(): void {
    console.log('Hello World!');
  }
}

interface Duck {
  Walk(): string;
  Fly(): string;
}

class WildDuck implements Duck {

  public Fly(): string {
    return 'Casual';
  }
  public Walk(): string {
    return 'Wild';
  }
}

class CityDuck implements Duck {
  public Fly(): string {
    return 'High-intensity';
  }
  public Walk(): string {
    return 'Casual';
  }
}

class MountainDuck implements Duck {
  public Fly(): string {
    return 'High-altitude';
  }
  public Walk(): string {
    return 'Wild';
  }
}

class CloudDuck implements Duck {
  public Fly(): string {
    return 'High-altitude';
  }
  public Walk(): string {
    return 'Casual';
  }
}
