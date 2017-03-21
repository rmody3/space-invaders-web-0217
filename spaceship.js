class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.crew = crew;

    this.cloaked = false
    this.docked = !Boolean(crew.length)
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.AddCrewMembers()
  }

  AddCrewMembers(){
    this.crew.forEach((member)=>{
      member.currentShip = this
    })
  }
}
