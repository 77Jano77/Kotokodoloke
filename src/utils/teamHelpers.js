// Helper function to ensure team is always an array
// This handles cases where Firebase stores team as an object instead of array
export const safeTeamToArray = (team) => {
    if (!team) return [];

    let teamArray;
    if (Array.isArray(team)) {
        teamArray = team;
    } else if (typeof team === 'object') {
        // If team is an object (from Firebase), convert to array
        teamArray = Object.values(team);
    } else {
        return [];
    }

    // Firebase no acepta undefined, convertir a null
    return teamArray.map(slot => slot === undefined ? null : slot);
};
