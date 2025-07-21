"use client"

    -a">
      
          {timeLeft.minutes === 1
           ="font-mono text-xs text-accent-a">
          {timeLeft.seconds === 1
            ? timeLeftLabels.seconds.singular
            : timeLeftLabels.seconds.plural}
        </div>
      </div>
    </div>
  )
}

export default CountDown
