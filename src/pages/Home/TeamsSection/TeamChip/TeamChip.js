
const TeamChip = ({teamName, color}) => {
    return `
          <div class="team-chip team-chip--${color}" role="listitem">
            <span class="team-chip__stripe" aria-hidden="true"></span>
            ${teamName}
          </div>
    `
}

export default TeamChip;