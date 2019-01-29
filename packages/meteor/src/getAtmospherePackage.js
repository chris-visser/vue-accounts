function reportMissingMeteorDependency(name, environment) {
  throw new Error(`
==> Meteor Package missing: '${name}' on ${environment} environment.
     Please run 'meteor add ${name}' to satisfy the Meteor package dependency.
`);
}


function getMeteorClientPackage(name) {
  if (Meteor.isClient) {
    if (typeof window.Package[name] !== 'undefined') {
      return window.Package[name];
    } else {
      reportMissingMeteorDependency(name, 'client');
    }
  }
}

function getMeteorServerPackage(name) {
  if (Meteor.isServer) {
    if (typeof global.Package[name] !== 'undefined') {
      return global.Package[name];
    } else {
      reportMissingMeteorDependency(name, 'server');
    }
  }
}

export default typeof window !== 'undefined' && window.document ? getMeteorClientPackage : getMeteorServerPackage;
